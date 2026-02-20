import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4390 } from "./fragment4390";
import type { FragmentToken4391 } from "./fragment4391";

export const FRAGMENT_4392 = gql(`
  fragment Fragment4392 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult4392 = ResultOf<typeof FRAGMENT_4392>;
type FragmentSelf4392 = NonNullable<FragmentResult4392>;

export type FragmentToken4392 =
  | FragmentSelf4392["__typename"]
  | FragmentSelf4392["typenameHint"] | FragmentToken4390 | FragmentToken4391;

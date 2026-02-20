import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4388 } from "./fragment4388";
import type { FragmentToken4389 } from "./fragment4389";

export const FRAGMENT_4390 = gql(`
  fragment Fragment4390 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult4390 = ResultOf<typeof FRAGMENT_4390>;
type FragmentSelf4390 = NonNullable<FragmentResult4390>;

export type FragmentToken4390 =
  | FragmentSelf4390["__typename"]
  | FragmentSelf4390["typenameHint"] | FragmentToken4388 | FragmentToken4389;

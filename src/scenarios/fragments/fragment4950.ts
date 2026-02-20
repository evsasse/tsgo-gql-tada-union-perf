import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4948 } from "./fragment4948";
import type { FragmentToken4949 } from "./fragment4949";

export const FRAGMENT_4950 = gql(`
  fragment Fragment4950 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult4950 = ResultOf<typeof FRAGMENT_4950>;
type FragmentSelf4950 = NonNullable<FragmentResult4950>;

export type FragmentToken4950 =
  | FragmentSelf4950["__typename"]
  | FragmentSelf4950["typenameHint"] | FragmentToken4948 | FragmentToken4949;

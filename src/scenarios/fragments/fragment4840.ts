import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4838 } from "./fragment4838";
import type { FragmentToken4839 } from "./fragment4839";

export const FRAGMENT_4840 = gql(`
  fragment Fragment4840 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult4840 = ResultOf<typeof FRAGMENT_4840>;
type FragmentSelf4840 = NonNullable<FragmentResult4840>;

export type FragmentToken4840 =
  | FragmentSelf4840["__typename"]
  | FragmentSelf4840["typenameHint"] | FragmentToken4838 | FragmentToken4839;

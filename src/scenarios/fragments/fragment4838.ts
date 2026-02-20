import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4836 } from "./fragment4836";
import type { FragmentToken4837 } from "./fragment4837";

export const FRAGMENT_4838 = gql(`
  fragment Fragment4838 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult4838 = ResultOf<typeof FRAGMENT_4838>;
type FragmentSelf4838 = NonNullable<FragmentResult4838>;

export type FragmentToken4838 =
  | FragmentSelf4838["__typename"]
  | FragmentSelf4838["typenameHint"] | FragmentToken4836 | FragmentToken4837;

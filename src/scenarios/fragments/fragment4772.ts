import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4770 } from "./fragment4770";
import type { FragmentToken4771 } from "./fragment4771";

export const FRAGMENT_4772 = gql(`
  fragment Fragment4772 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult4772 = ResultOf<typeof FRAGMENT_4772>;
type FragmentSelf4772 = NonNullable<FragmentResult4772>;

export type FragmentToken4772 =
  | FragmentSelf4772["__typename"]
  | FragmentSelf4772["typenameHint"] | FragmentToken4770 | FragmentToken4771;

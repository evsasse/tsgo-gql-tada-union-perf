import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4785 } from "./fragment4785";
import type { FragmentToken4786 } from "./fragment4786";

export const FRAGMENT_4787 = gql(`
  fragment Fragment4787 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult4787 = ResultOf<typeof FRAGMENT_4787>;
type FragmentSelf4787 = NonNullable<FragmentResult4787>;

export type FragmentToken4787 =
  | FragmentSelf4787["__typename"]
  | FragmentSelf4787["typenameHint"] | FragmentToken4785 | FragmentToken4786;

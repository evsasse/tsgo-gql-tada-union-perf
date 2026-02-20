import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4769 } from "./fragment4769";
import type { FragmentToken4770 } from "./fragment4770";

export const FRAGMENT_4771 = gql(`
  fragment Fragment4771 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult4771 = ResultOf<typeof FRAGMENT_4771>;
type FragmentSelf4771 = NonNullable<FragmentResult4771>;

export type FragmentToken4771 =
  | FragmentSelf4771["__typename"]
  | FragmentSelf4771["typenameHint"] | FragmentToken4769 | FragmentToken4770;

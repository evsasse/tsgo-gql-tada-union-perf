import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4768 } from "./fragment4768";
import type { FragmentToken4769 } from "./fragment4769";

export const FRAGMENT_4770 = gql(`
  fragment Fragment4770 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult4770 = ResultOf<typeof FRAGMENT_4770>;
type FragmentSelf4770 = NonNullable<FragmentResult4770>;

export type FragmentToken4770 =
  | FragmentSelf4770["__typename"]
  | FragmentSelf4770["typenameHint"] | FragmentToken4768 | FragmentToken4769;

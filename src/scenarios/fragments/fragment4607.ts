import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4605 } from "./fragment4605";
import type { FragmentToken4606 } from "./fragment4606";

export const FRAGMENT_4607 = gql(`
  fragment Fragment4607 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult4607 = ResultOf<typeof FRAGMENT_4607>;
type FragmentSelf4607 = NonNullable<FragmentResult4607>;

export type FragmentToken4607 =
  | FragmentSelf4607["__typename"]
  | FragmentSelf4607["typenameHint"] | FragmentToken4605 | FragmentToken4606;

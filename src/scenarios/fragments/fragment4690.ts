import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4688 } from "./fragment4688";
import type { FragmentToken4689 } from "./fragment4689";

export const FRAGMENT_4690 = gql(`
  fragment Fragment4690 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult4690 = ResultOf<typeof FRAGMENT_4690>;
type FragmentSelf4690 = NonNullable<FragmentResult4690>;

export type FragmentToken4690 =
  | FragmentSelf4690["__typename"]
  | FragmentSelf4690["typenameHint"] | FragmentToken4688 | FragmentToken4689;

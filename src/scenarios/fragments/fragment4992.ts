import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4990 } from "./fragment4990";
import type { FragmentToken4991 } from "./fragment4991";

export const FRAGMENT_4992 = gql(`
  fragment Fragment4992 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult4992 = ResultOf<typeof FRAGMENT_4992>;
type FragmentSelf4992 = NonNullable<FragmentResult4992>;

export type FragmentToken4992 =
  | FragmentSelf4992["__typename"]
  | FragmentSelf4992["typenameHint"] | FragmentToken4990 | FragmentToken4991;

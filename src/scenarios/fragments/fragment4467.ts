import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4465 } from "./fragment4465";
import type { FragmentToken4466 } from "./fragment4466";

export const FRAGMENT_4467 = gql(`
  fragment Fragment4467 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult4467 = ResultOf<typeof FRAGMENT_4467>;
type FragmentSelf4467 = NonNullable<FragmentResult4467>;

export type FragmentToken4467 =
  | FragmentSelf4467["__typename"]
  | FragmentSelf4467["typenameHint"] | FragmentToken4465 | FragmentToken4466;

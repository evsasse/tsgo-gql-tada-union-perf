import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4279 } from "./fragment4279";
import type { FragmentToken4280 } from "./fragment4280";

export const FRAGMENT_4281 = gql(`
  fragment Fragment4281 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult4281 = ResultOf<typeof FRAGMENT_4281>;
type FragmentSelf4281 = NonNullable<FragmentResult4281>;

export type FragmentToken4281 =
  | FragmentSelf4281["__typename"]
  | FragmentSelf4281["typenameHint"] | FragmentToken4279 | FragmentToken4280;

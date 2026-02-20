import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4045 } from "./fragment4045";
import type { FragmentToken4046 } from "./fragment4046";

export const FRAGMENT_4047 = gql(`
  fragment Fragment4047 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult4047 = ResultOf<typeof FRAGMENT_4047>;
type FragmentSelf4047 = NonNullable<FragmentResult4047>;

export type FragmentToken4047 =
  | FragmentSelf4047["__typename"]
  | FragmentSelf4047["typenameHint"] | FragmentToken4045 | FragmentToken4046;

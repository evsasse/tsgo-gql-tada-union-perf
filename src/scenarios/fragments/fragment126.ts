import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken124 } from "./fragment124";
import type { FragmentToken125 } from "./fragment125";

export const FRAGMENT_126 = gql(`
  fragment Fragment126 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult126 = ResultOf<typeof FRAGMENT_126>;
type FragmentSelf126 = NonNullable<FragmentResult126>;

export type FragmentToken126 =
  | FragmentSelf126["__typename"]
  | FragmentSelf126["typenameHint"] | FragmentToken124 | FragmentToken125;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2750 } from "./fragment2750";
import type { FragmentToken2751 } from "./fragment2751";

export const FRAGMENT_2752 = gql(`
  fragment Fragment2752 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult2752 = ResultOf<typeof FRAGMENT_2752>;
type FragmentSelf2752 = NonNullable<FragmentResult2752>;

export type FragmentToken2752 =
  | FragmentSelf2752["__typename"]
  | FragmentSelf2752["typenameHint"] | FragmentToken2750 | FragmentToken2751;

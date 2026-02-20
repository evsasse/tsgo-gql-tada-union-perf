import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2898 } from "./fragment2898";
import type { FragmentToken2899 } from "./fragment2899";

export const FRAGMENT_2900 = gql(`
  fragment Fragment2900 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult2900 = ResultOf<typeof FRAGMENT_2900>;
type FragmentSelf2900 = NonNullable<FragmentResult2900>;

export type FragmentToken2900 =
  | FragmentSelf2900["__typename"]
  | FragmentSelf2900["typenameHint"] | FragmentToken2898 | FragmentToken2899;

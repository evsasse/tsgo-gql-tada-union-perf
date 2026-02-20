import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2712 } from "./fragment2712";
import type { FragmentToken2713 } from "./fragment2713";

export const FRAGMENT_2714 = gql(`
  fragment Fragment2714 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult2714 = ResultOf<typeof FRAGMENT_2714>;
type FragmentSelf2714 = NonNullable<FragmentResult2714>;

export type FragmentToken2714 =
  | FragmentSelf2714["__typename"]
  | FragmentSelf2714["typenameHint"] | FragmentToken2712 | FragmentToken2713;

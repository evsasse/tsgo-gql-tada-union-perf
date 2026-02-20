import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2711 } from "./fragment2711";
import type { FragmentToken2712 } from "./fragment2712";

export const FRAGMENT_2713 = gql(`
  fragment Fragment2713 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult2713 = ResultOf<typeof FRAGMENT_2713>;
type FragmentSelf2713 = NonNullable<FragmentResult2713>;

export type FragmentToken2713 =
  | FragmentSelf2713["__typename"]
  | FragmentSelf2713["typenameHint"] | FragmentToken2711 | FragmentToken2712;

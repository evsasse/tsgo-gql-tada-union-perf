import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2768 } from "./fragment2768";
import type { FragmentToken2769 } from "./fragment2769";

export const FRAGMENT_2770 = gql(`
  fragment Fragment2770 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult2770 = ResultOf<typeof FRAGMENT_2770>;
type FragmentSelf2770 = NonNullable<FragmentResult2770>;

export type FragmentToken2770 =
  | FragmentSelf2770["__typename"]
  | FragmentSelf2770["typenameHint"] | FragmentToken2768 | FragmentToken2769;

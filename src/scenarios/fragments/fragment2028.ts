import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2026 } from "./fragment2026";
import type { FragmentToken2027 } from "./fragment2027";

export const FRAGMENT_2028 = gql(`
  fragment Fragment2028 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult2028 = ResultOf<typeof FRAGMENT_2028>;
type FragmentSelf2028 = NonNullable<FragmentResult2028>;

export type FragmentToken2028 =
  | FragmentSelf2028["__typename"]
  | FragmentSelf2028["typenameHint"] | FragmentToken2026 | FragmentToken2027;

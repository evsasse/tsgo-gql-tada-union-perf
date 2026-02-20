import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken026 } from "./fragment026";
import type { FragmentToken027 } from "./fragment027";

export const FRAGMENT_028 = gql(`
  fragment Fragment028 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult028 = ResultOf<typeof FRAGMENT_028>;
type FragmentSelf028 = NonNullable<FragmentResult028>;

export type FragmentToken028 =
  | FragmentSelf028["__typename"]
  | FragmentSelf028["typenameHint"] | FragmentToken026 | FragmentToken027;

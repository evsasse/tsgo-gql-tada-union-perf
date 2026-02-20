import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken741 } from "./fragment741";
import type { FragmentToken742 } from "./fragment742";

export const FRAGMENT_743 = gql(`
  fragment Fragment743 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult743 = ResultOf<typeof FRAGMENT_743>;
type FragmentSelf743 = NonNullable<FragmentResult743>;

export type FragmentToken743 =
  | FragmentSelf743["__typename"]
  | FragmentSelf743["typenameHint"] | FragmentToken741 | FragmentToken742;

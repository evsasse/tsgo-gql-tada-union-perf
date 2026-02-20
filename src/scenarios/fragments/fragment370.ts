import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken368 } from "./fragment368";
import type { FragmentToken369 } from "./fragment369";

export const FRAGMENT_370 = gql(`
  fragment Fragment370 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult370 = ResultOf<typeof FRAGMENT_370>;
type FragmentSelf370 = NonNullable<FragmentResult370>;

export type FragmentToken370 =
  | FragmentSelf370["__typename"]
  | FragmentSelf370["typenameHint"] | FragmentToken368 | FragmentToken369;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken856 } from "./fragment856";
import type { FragmentToken857 } from "./fragment857";

export const FRAGMENT_858 = gql(`
  fragment Fragment858 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult858 = ResultOf<typeof FRAGMENT_858>;
type FragmentSelf858 = NonNullable<FragmentResult858>;

export type FragmentToken858 =
  | FragmentSelf858["__typename"]
  | FragmentSelf858["typenameHint"] | FragmentToken856 | FragmentToken857;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken997 } from "./fragment997";
import type { FragmentToken998 } from "./fragment998";

export const FRAGMENT_999 = gql(`
  fragment Fragment999 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult999 = ResultOf<typeof FRAGMENT_999>;
type FragmentSelf999 = NonNullable<FragmentResult999>;

export type FragmentToken999 =
  | FragmentSelf999["__typename"]
  | FragmentSelf999["typenameHint"] | FragmentToken997 | FragmentToken998;

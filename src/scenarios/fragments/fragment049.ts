import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken047 } from "./fragment047";
import type { FragmentToken048 } from "./fragment048";

export const FRAGMENT_049 = gql(`
  fragment Fragment049 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult049 = ResultOf<typeof FRAGMENT_049>;
type FragmentSelf049 = NonNullable<FragmentResult049>;

export type FragmentToken049 =
  | FragmentSelf049["__typename"]
  | FragmentSelf049["typenameHint"] | FragmentToken047 | FragmentToken048;

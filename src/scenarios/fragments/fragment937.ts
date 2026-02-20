import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken935 } from "./fragment935";
import type { FragmentToken936 } from "./fragment936";

export const FRAGMENT_937 = gql(`
  fragment Fragment937 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult937 = ResultOf<typeof FRAGMENT_937>;
type FragmentSelf937 = NonNullable<FragmentResult937>;

export type FragmentToken937 =
  | FragmentSelf937["__typename"]
  | FragmentSelf937["typenameHint"] | FragmentToken935 | FragmentToken936;

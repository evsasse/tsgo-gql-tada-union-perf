import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken740 } from "./fragment740";
import type { FragmentToken741 } from "./fragment741";

export const FRAGMENT_742 = gql(`
  fragment Fragment742 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult742 = ResultOf<typeof FRAGMENT_742>;
type FragmentSelf742 = NonNullable<FragmentResult742>;

export type FragmentToken742 =
  | FragmentSelf742["__typename"]
  | FragmentSelf742["typenameHint"] | FragmentToken740 | FragmentToken741;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken906 } from "./fragment906";
import type { FragmentToken907 } from "./fragment907";

export const FRAGMENT_908 = gql(`
  fragment Fragment908 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult908 = ResultOf<typeof FRAGMENT_908>;
type FragmentSelf908 = NonNullable<FragmentResult908>;

export type FragmentToken908 =
  | FragmentSelf908["__typename"]
  | FragmentSelf908["typenameHint"] | FragmentToken906 | FragmentToken907;

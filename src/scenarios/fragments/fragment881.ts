import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken879 } from "./fragment879";
import type { FragmentToken880 } from "./fragment880";

export const FRAGMENT_881 = gql(`
  fragment Fragment881 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult881 = ResultOf<typeof FRAGMENT_881>;
type FragmentSelf881 = NonNullable<FragmentResult881>;

export type FragmentToken881 =
  | FragmentSelf881["__typename"]
  | FragmentSelf881["typenameHint"] | FragmentToken879 | FragmentToken880;

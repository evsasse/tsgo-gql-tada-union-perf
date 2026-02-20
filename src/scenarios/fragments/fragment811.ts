import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken809 } from "./fragment809";
import type { FragmentToken810 } from "./fragment810";

export const FRAGMENT_811 = gql(`
  fragment Fragment811 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult811 = ResultOf<typeof FRAGMENT_811>;
type FragmentSelf811 = NonNullable<FragmentResult811>;

export type FragmentToken811 =
  | FragmentSelf811["__typename"]
  | FragmentSelf811["typenameHint"] | FragmentToken809 | FragmentToken810;

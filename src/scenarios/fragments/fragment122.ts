import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken120 } from "./fragment120";
import type { FragmentToken121 } from "./fragment121";

export const FRAGMENT_122 = gql(`
  fragment Fragment122 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult122 = ResultOf<typeof FRAGMENT_122>;
type FragmentSelf122 = NonNullable<FragmentResult122>;

export type FragmentToken122 =
  | FragmentSelf122["__typename"]
  | FragmentSelf122["typenameHint"] | FragmentToken120 | FragmentToken121;

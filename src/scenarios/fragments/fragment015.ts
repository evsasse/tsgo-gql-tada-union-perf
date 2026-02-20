import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken013 } from "./fragment013";
import type { FragmentToken014 } from "./fragment014";

export const FRAGMENT_015 = gql(`
  fragment Fragment015 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult015 = ResultOf<typeof FRAGMENT_015>;
type FragmentSelf015 = NonNullable<FragmentResult015>;

export type FragmentToken015 =
  | FragmentSelf015["__typename"]
  | FragmentSelf015["typenameHint"] | FragmentToken013 | FragmentToken014;

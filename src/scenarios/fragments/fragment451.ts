import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken449 } from "./fragment449";
import type { FragmentToken450 } from "./fragment450";

export const FRAGMENT_451 = gql(`
  fragment Fragment451 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult451 = ResultOf<typeof FRAGMENT_451>;
type FragmentSelf451 = NonNullable<FragmentResult451>;

export type FragmentToken451 =
  | FragmentSelf451["__typename"]
  | FragmentSelf451["typenameHint"] | FragmentToken449 | FragmentToken450;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken535 } from "./fragment535";
import type { FragmentToken536 } from "./fragment536";

export const FRAGMENT_537 = gql(`
  fragment Fragment537 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult537 = ResultOf<typeof FRAGMENT_537>;
type FragmentSelf537 = NonNullable<FragmentResult537>;

export type FragmentToken537 =
  | FragmentSelf537["__typename"]
  | FragmentSelf537["typenameHint"] | FragmentToken535 | FragmentToken536;

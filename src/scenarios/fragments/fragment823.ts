import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken821 } from "./fragment821";
import type { FragmentToken822 } from "./fragment822";

export const FRAGMENT_823 = gql(`
  fragment Fragment823 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult823 = ResultOf<typeof FRAGMENT_823>;
type FragmentSelf823 = NonNullable<FragmentResult823>;

export type FragmentToken823 =
  | FragmentSelf823["__typename"]
  | FragmentSelf823["typenameHint"] | FragmentToken821 | FragmentToken822;

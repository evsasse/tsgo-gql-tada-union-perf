import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken556 } from "./fragment556";
import type { FragmentToken557 } from "./fragment557";

export const FRAGMENT_558 = gql(`
  fragment Fragment558 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult558 = ResultOf<typeof FRAGMENT_558>;
type FragmentSelf558 = NonNullable<FragmentResult558>;

export type FragmentToken558 =
  | FragmentSelf558["__typename"]
  | FragmentSelf558["typenameHint"] | FragmentToken556 | FragmentToken557;

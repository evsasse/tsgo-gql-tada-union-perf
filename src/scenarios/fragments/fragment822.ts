import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken820 } from "./fragment820";
import type { FragmentToken821 } from "./fragment821";

export const FRAGMENT_822 = gql(`
  fragment Fragment822 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult822 = ResultOf<typeof FRAGMENT_822>;
type FragmentSelf822 = NonNullable<FragmentResult822>;

export type FragmentToken822 =
  | FragmentSelf822["__typename"]
  | FragmentSelf822["typenameHint"] | FragmentToken820 | FragmentToken821;

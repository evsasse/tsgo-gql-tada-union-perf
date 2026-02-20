import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken498 } from "./fragment498";
import type { FragmentToken499 } from "./fragment499";

export const FRAGMENT_500 = gql(`
  fragment Fragment500 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult500 = ResultOf<typeof FRAGMENT_500>;
type FragmentSelf500 = NonNullable<FragmentResult500>;

export type FragmentToken500 =
  | FragmentSelf500["__typename"]
  | FragmentSelf500["typenameHint"] | FragmentToken498 | FragmentToken499;

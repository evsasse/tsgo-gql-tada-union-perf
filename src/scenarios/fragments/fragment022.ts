import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken020 } from "./fragment020";
import type { FragmentToken021 } from "./fragment021";

export const FRAGMENT_022 = gql(`
  fragment Fragment022 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult022 = ResultOf<typeof FRAGMENT_022>;
type FragmentSelf022 = NonNullable<FragmentResult022>;

export type FragmentToken022 =
  | FragmentSelf022["__typename"]
  | FragmentSelf022["typenameHint"] | FragmentToken020 | FragmentToken021;

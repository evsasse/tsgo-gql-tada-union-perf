import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken837 } from "./fragment837";
import type { FragmentToken838 } from "./fragment838";

export const FRAGMENT_839 = gql(`
  fragment Fragment839 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult839 = ResultOf<typeof FRAGMENT_839>;
type FragmentSelf839 = NonNullable<FragmentResult839>;

export type FragmentToken839 =
  | FragmentSelf839["__typename"]
  | FragmentSelf839["typenameHint"] | FragmentToken837 | FragmentToken838;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken875 } from "./fragment875";
import type { FragmentToken876 } from "./fragment876";

export const FRAGMENT_877 = gql(`
  fragment Fragment877 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult877 = ResultOf<typeof FRAGMENT_877>;
type FragmentSelf877 = NonNullable<FragmentResult877>;

export type FragmentToken877 =
  | FragmentSelf877["__typename"]
  | FragmentSelf877["typenameHint"] | FragmentToken875 | FragmentToken876;

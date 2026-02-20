import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken091 } from "./fragment091";
import type { FragmentToken092 } from "./fragment092";

export const FRAGMENT_093 = gql(`
  fragment Fragment093 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult093 = ResultOf<typeof FRAGMENT_093>;
type FragmentSelf093 = NonNullable<FragmentResult093>;

export type FragmentToken093 =
  | FragmentSelf093["__typename"]
  | FragmentSelf093["typenameHint"] | FragmentToken091 | FragmentToken092;

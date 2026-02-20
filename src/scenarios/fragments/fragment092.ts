import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken090 } from "./fragment090";
import type { FragmentToken091 } from "./fragment091";

export const FRAGMENT_092 = gql(`
  fragment Fragment092 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult092 = ResultOf<typeof FRAGMENT_092>;
type FragmentSelf092 = NonNullable<FragmentResult092>;

export type FragmentToken092 =
  | FragmentSelf092["__typename"]
  | FragmentSelf092["typenameHint"] | FragmentToken090 | FragmentToken091;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken023 } from "./fragment023";
import type { FragmentToken024 } from "./fragment024";

export const FRAGMENT_025 = gql(`
  fragment Fragment025 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult025 = ResultOf<typeof FRAGMENT_025>;
type FragmentSelf025 = NonNullable<FragmentResult025>;

export type FragmentToken025 =
  | FragmentSelf025["__typename"]
  | FragmentSelf025["typenameHint"] | FragmentToken023 | FragmentToken024;

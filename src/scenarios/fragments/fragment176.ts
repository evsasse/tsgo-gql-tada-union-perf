import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken174 } from "./fragment174";
import type { FragmentToken175 } from "./fragment175";

export const FRAGMENT_176 = gql(`
  fragment Fragment176 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult176 = ResultOf<typeof FRAGMENT_176>;
type FragmentSelf176 = NonNullable<FragmentResult176>;

export type FragmentToken176 =
  | FragmentSelf176["__typename"]
  | FragmentSelf176["typenameHint"] | FragmentToken174 | FragmentToken175;

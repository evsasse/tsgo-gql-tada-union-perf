import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken454 } from "./fragment454";
import type { FragmentToken455 } from "./fragment455";

export const FRAGMENT_456 = gql(`
  fragment Fragment456 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult456 = ResultOf<typeof FRAGMENT_456>;
type FragmentSelf456 = NonNullable<FragmentResult456>;

export type FragmentToken456 =
  | FragmentSelf456["__typename"]
  | FragmentSelf456["typenameHint"] | FragmentToken454 | FragmentToken455;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken612 } from "./fragment612";
import type { FragmentToken613 } from "./fragment613";

export const FRAGMENT_614 = gql(`
  fragment Fragment614 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult614 = ResultOf<typeof FRAGMENT_614>;
type FragmentSelf614 = NonNullable<FragmentResult614>;

export type FragmentToken614 =
  | FragmentSelf614["__typename"]
  | FragmentSelf614["typenameHint"] | FragmentToken612 | FragmentToken613;

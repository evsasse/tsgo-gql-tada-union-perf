import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken765 } from "./fragment765";
import type { FragmentToken766 } from "./fragment766";

export const FRAGMENT_767 = gql(`
  fragment Fragment767 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult767 = ResultOf<typeof FRAGMENT_767>;
type FragmentSelf767 = NonNullable<FragmentResult767>;

export type FragmentToken767 =
  | FragmentSelf767["__typename"]
  | FragmentSelf767["typenameHint"] | FragmentToken765 | FragmentToken766;

import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken082 } from "./fragment082";
import type { FragmentToken083 } from "./fragment083";

export const FRAGMENT_084 = gql(`
  fragment Fragment084 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult084 = ResultOf<typeof FRAGMENT_084>;
type FragmentSelf084 = NonNullable<FragmentResult084>;

export type FragmentToken084 =
  | FragmentSelf084["__typename"]
  | FragmentSelf084["typenameHint"] | FragmentToken082 | FragmentToken083;

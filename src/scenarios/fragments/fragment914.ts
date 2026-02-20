import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken912 } from "./fragment912";
import type { FragmentToken913 } from "./fragment913";

export const FRAGMENT_914 = gql(`
  fragment Fragment914 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult914 = ResultOf<typeof FRAGMENT_914>;
type FragmentSelf914 = NonNullable<FragmentResult914>;

export type FragmentToken914 =
  | FragmentSelf914["__typename"]
  | FragmentSelf914["typenameHint"] | FragmentToken912 | FragmentToken913;

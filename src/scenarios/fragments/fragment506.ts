import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken504 } from "./fragment504";
import type { FragmentToken505 } from "./fragment505";

export const FRAGMENT_506 = gql(`
  fragment Fragment506 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult506 = ResultOf<typeof FRAGMENT_506>;
type FragmentSelf506 = NonNullable<FragmentResult506>;

export type FragmentToken506 =
  | FragmentSelf506["__typename"]
  | FragmentSelf506["typenameHint"] | FragmentToken504 | FragmentToken505;
